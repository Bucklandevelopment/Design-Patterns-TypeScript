import config from "./config.json";

/**
 * Clase que exporta un singleton de la configuracion
 * como se explica en el video la instancia y los parametros
 * son privados y estaticos
 * 
 * Con esto conseguimos blindarlos de tal manera que no se puedan
 * modificar una vez inicializada la instancia de la clase,
 * la cual ocurren en metodo initialize.
 * 
 * Debido a que el contructor es privado, solo podemos acceder
 * a la instancia de la clase haciendo uso del metodo estático
 * público getInstance, al igual que al resto de parametros.
 */

export default class MyConfiguration {
    private static instance: MyConfiguration;

    private static _connectionString: string;
    private static _environment: string;
    private static _apiUrl: string;

    private constructor() { }

    private static initialize(): void {
        this._connectionString = config.connectionString;
        this._environment = config.enviroment;
        this._apiUrl = config.apiUrl;
    }

    public static getInstance(): MyConfiguration {
        if (!this.instance) {
            this.initialize();
            this.instance = new MyConfiguration();
        }

        return this.instance;
    }

    get connectionString(): string {
        return MyConfiguration._connectionString;
    }

    get enviroment(): string {
        return MyConfiguration._environment;
    }

    get apiUrl(): string {
        return MyConfiguration._apiUrl;
    }
}