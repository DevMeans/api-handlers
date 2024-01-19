import { WidgetItem } from '../components/WidgetItem';

export default function DashboardPage() {
  return (

    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {/* TODO: src/components <WidgetItem /> */}
      <WidgetItem title='Aun no se que poner' >
        <div className='text-center'>
            <h1 className='font-bold text-3xl'>Hola desde widget</h1>
        </div>
      
      </WidgetItem>
    </div>

  );
}