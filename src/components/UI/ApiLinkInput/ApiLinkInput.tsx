// import { useAppDispatch, useAppSelector } from '../../../hook/useRedux';
// import { setApiLink } from '../../../redux/slices/GraphQLSlice';
import classes from './ApiLinkInput.module.css';

interface IProps {
  label: string;
  value: string;
  changeHandler: (value: string) => void;
}

const ApiSourceInput = ({ label, value, changeHandler }: IProps) => {
  // const { apiLink } = useAppSelector((store) => store.graphQL);
  // const dispatch = useAppDispatch();

  return (
    <div className={classes.wrapper}>
      <label htmlFor="source">{label}</label>
      <input
        className={classes.input}
        id="source"
        type="text"
        value={value}
        onChange={(e) => changeHandler(e.target.value)}
      />
    </div>
  );
};

export default ApiSourceInput;
