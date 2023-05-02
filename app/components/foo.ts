import Component from '@glimmer/component';

interface FooSignature {
  Args: {
    onClose: () => void;
  };
}

export default class Foo extends Component<FooSignature> {
  foo = false;
}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    Foo: typeof Foo;
  }
}
