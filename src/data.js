// importo chiavi per API di youtube
export const API_KEY = 'AIzaSyDhnGJHOc62I5OYBKQoXjQP_NBg9PR5YMU';

// gestiamo le visulizzazioni

export const value_converter = (value) => {
    if (value>=1000000)
    {
        return Math.floor(value/1000000)+"M";
    }
    else if (value>=1000) {
        return Math.floor(value/1000)+"K";
    }
    else {
        return value;
    }
}
