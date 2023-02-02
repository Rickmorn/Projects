export class Notes {
    constructor(
        public id: number,
        public category: string,
        public header: string,
        public content: string,
        public noteDate: string,
        public priority: string,
        public active: boolean
    ) {}
}