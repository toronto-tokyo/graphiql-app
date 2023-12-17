import { useAppDispatch, useAppSelector } from '../../../hook/useRedux';
import { setApiLink } from '../../../redux/slices/GraphQLSlice';
import classes from './ApiLinkInput.module.css';

interface IProps {
  label: string;
}

const ApiSourceInput = ({ label }: IProps) => {
  const { apiLink } = useAppSelector((store) => store.graphQL);
  const dispatch = useAppDispatch();

  return (
    <div className={classes.wrapper}>
      <label htmlFor="source">{label}</label>
      <input
        className={classes.input}
        id="source"
        type="text"
        value={apiLink}
        onChange={(e) => dispatch(setApiLink(e.target.value))}
      />
    </div>
  );
};

export default ApiSourceInput;
