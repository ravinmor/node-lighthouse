export default {
    async utilFunction() {
        const data = { message: 'Hello world!' }
        return data
    },
    addSpace(n){
        let text = "";
        for (let index = 0; index < n; index++) {
          text += '\u0020';
        }

        return text;
      }
}