//employees.json dosyası oluşturalım ve içerisine {"name": "Employee 1 Name", "salary": 2000} verisini ekleyelim. (CREATE)
//CREATE

const fs = require('fs');



fs.writeFile('employees.json', '{"name": "Employee 1 Name", "salary": 2000}', 'utf8', (err) => {
    if (err) console.log(err);
});

//DOSYA OKUMAK

fs.readFile('employees.json', 'utf8', (err, data) => { // callback fonksiyonu ile birlikte çalıştırıyoruz.
    if (err) console.log(err);                         // hata kontrolü
    console.log(data);                                 // okunan verinin çıktısının alınması
  })

//DOSYAYA VERİ EKLEMEK
fs.appendFile('employees.json', '\n YENI TEXT', 'utf8', (err) => {
    if (err) console.log(err);
});

//DOSYAYI SİLMEK 
fs.unlink('employees.json', (err) => {
    if (err) console.log(err);
});