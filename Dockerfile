# استخدام إصدار حديث من Node.js
FROM node:18

# تعيين مجلد العمل داخل الحاوية
WORKDIR /app

# نسخ الملفات الضرورية لتثبيت الحزم
COPY package.json package-lock.json ./

# تثبيت الحزم المطلوبة
RUN npm install

# نسخ جميع ملفات المشروع إلى الحاوية
COPY . .

# تحديد المنفذ الذي سيعمل عليه التطبيق داخل Google Cloud Run
ENV PORT=8080

# تشغيل التطبيق
CMD ["node", "server.js"]
