/* eslint-disable no-unused-vars */

const arr = [1, 2, 3];
const obj = { a: true, b: false };

export default {
  methods: {
    arr() {
      this.a = arr[0];
      const [b] = arr;
      const c = arr[0];
    },
    obj() {
      this.a = obj.a;
      const a = obj.a;
      const { b } = obj;
    }
  }
};
