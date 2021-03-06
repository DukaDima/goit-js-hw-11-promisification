console.log('task-01');

const delay = ms => {
   return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(ms);
        reject('error');
        
    }, ms)
       
    })
    
};

const logger = time => console.log(`Resolved after ${time}ms`);
const error = time =>console.log(`error ${time}`)
// Вызовы функции для проверки
delay(2000).then(logger); // Resolved after 2000ms
delay(1000).then(logger); // Resolved after 1000ms
delay(1500).then(logger); // Resolved after 1500ms