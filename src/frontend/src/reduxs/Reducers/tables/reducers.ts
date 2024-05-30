const zeroDatas = {
  name: '',
  job: '',
  company: '',
  location: '',
  lastlogin: ''
};

function tablesReducer(state = {
  type: 'TABLE',
  props: [zeroDatas]
}, action): unknown {
  if ((action.type !== undefined) &&
    ((action.type as string).includes('TABLE'))) {
    state.props = action.props;
    return {
      type: 'TABLE',
      props: state
    };
  } else {
    return state;
  }
}

export default tablesReducer;
