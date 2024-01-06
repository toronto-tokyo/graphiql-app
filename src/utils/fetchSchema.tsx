import { getIntrospectionQuery } from 'graphql';

interface IProps {
  url: string;
}

interface IType {
  name: string | null;
  ofType: null | IType;
}

interface ISchemaType {
  description: string;
  name: string;
  fields: ISchemaType[] | null;
  inputFields: ISchemaType[] | null;
  type?: IType;
}

const parseSchema = (
  data: ISchemaType[] | ISchemaType | null
): Record<string, string> | object => {
  if (!data) return {};
  if (!Array.isArray(data)) {
    if (data.name.startsWith('_')) return {};
    if (!Array.isArray(data.fields) && !Array.isArray(data.inputFields)) {
      const description = getDescription(data) || '';
      const type = getType(data.type) || '';
      const schemaType = {
        description,
        type,
      };
      const pureSchemaType = removeFalseFields(schemaType);
      return {
        [data.name]: pureSchemaType,
      };
    } else {
      const content = Array.isArray(data.fields)
        ? parseSchema(data.fields)
        : parseSchema(data.inputFields);
      return {
        [data.name]: content,
      };
    }
  }
  const result: Record<string, string> = data.reduce(
    (acc, item) => ({ ...acc, ...parseSchema(item) }),
    {}
  );
  return result;
};

const removeFalseFields = (
  obj: Record<string, string>
): Record<string, string> => {
  const filteredFields = Object.entries(obj).filter((field) => !!field[1]);
  const pureObject = Object.fromEntries(filteredFields);
  return pureObject;
};

const getDescription = (value: ISchemaType): string | null => {
  return value.description ? value.description : null;
};

const getType = (value: IType | undefined): string | null => {
  if (value?.ofType) return getType(value?.ofType);
  if (value?.name) return value.name;
  return null;
};

export const fetchSchema = async ({ url }: IProps) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        query: getIntrospectionQuery(),
      }),
    });
    const data = await response.json();
    const schema = parseSchema(data.data.__schema.types);
    return schema;
  } catch (error) {
    console.error('Fetch schema error');
  }
};
