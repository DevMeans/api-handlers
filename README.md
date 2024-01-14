# Develotmen
Pasos para levartar la app en desarrollo
1. Levantar la base de datos
docker compose up -d
2. renombrar el .env.template a .env
3. reemplazar las variables de entorno
4. ejecutar el comando ``npm install`` 
5. Ejecutar el SEED Para crear [la base de datos local](localhost:3000/api/seed)
# Primas command
npx prisma init
npx prisma migrate dev
npx prisma generate


# Pro



# Stage