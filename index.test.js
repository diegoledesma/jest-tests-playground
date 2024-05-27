import ConsoleWrapper from './index';

describe('consoleWrapper', () => {
    
    let myConsole;
    let logManagerMock
    beforeEach(() => {
        logManagerMock = {
            log: jest.fn()
        };
            
        myConsole = new ConsoleWrapper(logManagerMock);
        logManagerMock.log.mockClear();
        
    });

    test('LogManager con nivel ´info´ es llamada con los parametros correctos', () => {
        myConsole.setLevel('info');
        myConsole.setMessage('msj de prueba');

        myConsole.log();

        expect(logManagerMock.log).toHaveBeenCalledTimes(1);
        expect(logManagerMock.log).toHaveBeenCalledWith('info', 'msj de prueba');
    });



    test('LogManager con nivel ´error´ es llamada con los parametros correctos', () => {
        myConsole.setLevel('error');
        myConsole.setMessage('msj de prueba');

        myConsole.log();

        expect(logManagerMock.log).toHaveBeenCalledTimes(1);
        expect(logManagerMock.log).toHaveBeenCalledWith('error', 'msj de prueba');
    });
});

 