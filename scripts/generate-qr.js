const QRCode = require('qrcode');
const fs = require('fs');
const path = require('path');

const vcard = [
  'BEGIN:VCARD',
  'VERSION:3.0',
  'N:Mehta;Mitesh;;Mr.;',
  'FN:Mr. Mitesh Mehta',
  'ORG:Gold Bridge Capital Solution',
  'TITLE:Senior Business Consultant',
  'TEL;TYPE=CELL,VOICE:+919824291055',
  'EMAIL;TYPE=WORK:goldbridge2026@gmail.com',
  'URL:https://goldbridge.in',
  'END:VCARD'
].join('\r\n');

const outPath = path.join(__dirname, '..', 'public', 'images', 'mitesh-mehta-qr.png');

QRCode.toFile(outPath, vcard, {
  width: 600,
  margin: 3,
  color: {
    dark: '#0B5D4B',
    light: '#FFFFFF'
  },
  errorCorrectionLevel: 'M'
}, function (err) {
  if (err) {
    console.error('Error generating QR code:', err);
    process.exit(1);
  }
  console.log('Successfully generated clean QR code at', outPath);
});
