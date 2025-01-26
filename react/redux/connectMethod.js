function connect(mapStateToProps, mapDispatchToProps) {
  return function (WrappedComponent) {
    return class extends React.Component {
      render() {
        return (
          <WrappedComponent
            {...this.props}
            {...mapStateToProps(store.getState(), this.props)}
            {...mapDispatchToProps(store.dispatch, this.props)}
          />
        );
      }
      componentDidMount() {
        this.unsubscribe = store.subscribe(this.handleChange.bind(this));
      }

      componentWillUnmount() {
        this.unsubscribe();
      }

      handleChange() {
        this.forceUpdate();
      }
    };
  };
}
