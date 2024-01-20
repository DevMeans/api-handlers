# Develotmen
Pasos para levartar la app en desarrollo
1. Levantar la base de datos
   ```docker compose up -d``` 
2. renombrar el .env.template a .env
3. reemplazar las variables de entorno
4. ejecutar el comando ```npm install``` 
5. ejecutar el comando ```npm run dev``` 
6. ejecutar los comando de prisma
```
npx prisma migrate dev
npx prisma generate
```
7. Ejecutar el SEED Para crear [la base de datos local](localhost:3000/api/seed)

## Nota :usuario por defecto
__usuario:__ test1@gmail.com
__password:__ 1234

# Primas command
npx prisma init
npx prisma migrate dev
npx prisma generate


# Pro



# Stage