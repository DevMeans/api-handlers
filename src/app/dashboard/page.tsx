import { getServerSession } from 'next-auth';
import { WidgetItem } from '../components/WidgetItem';
import { authOption } from '../api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';



export default async function DashboardPage() {

  const session = await getServerSession(authOption)
  if(!session){
    redirect('/api/auth/signin')
  }
  return (

    <div className="grid gap-6 md:grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
      {/* TODO: src/components <WidgetItem /> */}
      <WidgetItem title='Usuario conectado' >
        <div className='text-center'>
            <h1 className='font-bold text-3xl'>Hola desde widget</h1>
              <span className='text-blue-500 block'>
                {session.user?.email}
              </span>
              <span className='text-blue-500 block'>
                {session.user?.name}
              </span>
              <span className='text-blue-500'>
                {session.user?.image}
              </span>
        </div>
      
      </WidgetItem>
    </div>

  );
}