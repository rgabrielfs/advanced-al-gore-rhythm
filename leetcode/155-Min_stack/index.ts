class MinStack {
    private stack: number[];
    private minStack: number[];

    constructor() {
        this.stack = [];
        // Segundo stack para armazenar sequência de míminimos
        this.minStack = [];
    }

    push(val: number): void {
        this.stack.push(val);

        // Se o stack estiver vazio ou se o valor for menor que o número minimo anterior, adiciona o valor ao minStack
        if (this.minStack.length === 0 || val <= this.minStack[this.minStack.length - 1]) {
            this.minStack.push(val);
        }
    }

    pop(): void {
        // Remove o topo do stack e armazena o valor removido
        const removed = this.stack.pop();

        // Se o valor removido for o atual minimo, remove o topo do minStack
        if (removed === this.minStack[this.minStack.length - 1]) {
            this.minStack.pop();
        }
    }

    top(): number {
        return this.stack[this.stack.length - 1];
    }

    getMin(): number {
        return this.minStack[this.minStack.length - 1];
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
