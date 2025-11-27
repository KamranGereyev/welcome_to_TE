import React, { Component, memo } from 'react';

type IUser = {
  name: string,
  age: number,
};

type IProps = {
  user: IUser,
};

// ---------- функциональные компоненты ----------

const FirstComponent = memo(({ name, age }: IUser) => (
  <div>
    my name is {name}, my age is {age}
  </div>
));

// -------------------------------------------------

const areUserPropsEqual = (prev: IProps, next: IProps) =>
  prev.user.name === next.user.name && prev.user.age === next.user.age;

const SecondComponent = memo(
  ({ user: { name, age } }: IProps) => (
    <div>
      my name is {name}, my age is {age}
    </div>
  ),
  areUserPropsEqual,
);

// ---------- классовые компоненты ----------

class ThirdComponent extends React.PureComponent<IUser> {
  render() {
    return (
      <div>
        my name is {this.props.name}, my age is {this.props.age}
      </div>
    );
  }
}

// -------------------------------------------

class FourthComponent extends Component<IProps> {
  shouldComponentUpdate(nextProps: IProps) {
    const prevUser = this.props.user;
    const nextUser = nextProps.user;

    return prevUser.name !== nextUser.name || prevUser.age !== nextUser.age;
  }

  render() {
    const { user } = this.props;
    return (
      <div>
        my name is {user.name}, my age is {user.age}
      </div>
    );
  }
}
