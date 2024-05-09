export function useGenerateSheeps(num){
    if(!num) num = 1;

    return [...new Array(num)].map(() => {
        let sheep = {
            fill: [...new Array(5)].map(() => {
                return `rgb(${[...new Array(3)].map(() => Math.floor(Math.random() * 256)).join(',')})`
            }).join('/'),
        };
        return sheep;
    });
}