class ConsoleWrapper {
    level;
    message;
    manager;

    constructor(logManager) {
        this.manager = logManager;
    }

    setLevel(level) {
        this.level = level;
    }

    setMessage(message) {
        this.message = message;
    }

    log() {
        this.manager.log(this.level, this.message);
        switch (this.level) {
            case 'info': {
                console.info(this.message);
                break;
            }   
            case 'error': {
                console.log(this.message);
                break;
            }
            default: {
                throw new Error('parametro level incorrecto');
            }
        }
    }
}

export default ConsoleWrapper;
