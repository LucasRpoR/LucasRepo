const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '..', 'assets');
const files = fs.readdirSync(srcDir).filter(f => /hero-bg\.(jpe?g|png)$/i.test(f));

if(files.length === 0){
  console.error('No source hero image found in assets/. Place hero-bg.jpg or hero-bg.png and re-run.');
  process.exit(1);
}

const sizes = [1600, 1200, 900, 600];

(async ()=>{
  for(const file of files){
    const inFile = path.join(srcDir, file);
    const name = path.parse(file).name;
    for(const w of sizes){
      const outJpeg = path.join(srcDir, `${name}-${w}.jpg`);
      const outWebp = path.join(srcDir, `${name}-${w}.webp`);
      await sharp(inFile).rotate().resize(w).jpeg({quality:80, mozjpeg:true}).toFile(outJpeg);
      await sharp(inFile).rotate().resize(w).webp({quality:72}).toFile(outWebp);
      console.log('Wrote', outJpeg, outWebp);
    }
    // also write a large webp
    await sharp(inFile).rotate().resize(2000).webp({quality:72}).toFile(path.join(srcDir, `${name}-2000.webp`));
  }
  console.log('Done. Optimized images written to assets/.');
})().catch(err=>{console.error(err);process.exit(2)});
