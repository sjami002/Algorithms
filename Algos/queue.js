class Queue {
  constructor() {
    this.data = [];
  }

  add(record) {
    this.data.unshift(record);
  }

  remove() {
    return this.data.pop();
  }
}

// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;
