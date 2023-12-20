export function range(end: number, start?: number, step?: number) {



const result = [1]
console.log('RES:', result)
return result
}

range(4); // => [0, 1, 2, 3] 
range(-4); // => [0, -1, -2, -3]
range(1, 5); // => [1, 2, 3, 4]
range(0, 20, 5); // => [0, 5, 10, 15]
range(0, -4, -1); // => [0, -1, -2, -3]
range(1, 4, 0); // => [1, 1, 1]
range(0); // => []