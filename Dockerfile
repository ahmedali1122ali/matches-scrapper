# تحديد إصدار Node.js المطلوب
FROM node:18

# تعيين مجلد العمل داخل الحاوية
WORKDIR /app

# نسخ الملفات الضرورية لتثبيت الحزم
COPY package.json package-lock.json ./

# تثبيت الحزم
RUN npm install

# نسخ جميع ملفات المشروع إلى الحاوية
COPY . .

# تحديد أمر التشغيل الرئيسي للتطبيق
CMD ["node", "server.js"]
