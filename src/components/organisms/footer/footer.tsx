import { Tabs } from '@/components/molecules/tabs/tabs';

const aboutUs = ['Услуги', 'Контакты', 'Адрес'];
const social = ['Телеграмм', 'Instagram', 'Вконтакте'];

export function Footer() {
  return (
    <footer className="flex">
      <div>
        <a href="#">
          <h2 className='text-xl'>
            BB
          </h2>
        </a>
        <a href="#" className='text-aaa dark:text-gray'>
            beauty-bliss
        </a>
      </div>
      <div>
        <label>
          <h2>О нас</h2>
        </label>
        <ul>
          {aboutUs.map((el) =>(
            <li key={el}>
              <a href="#" className='text-accents-5 dark:text-gray text-sm hover:text-aaa'>
                {el}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <ul>
        <p>О нас</p>
        {social.map((el) =>
          <li key={el}>
            <a href="#" className='text-accents-5 dark:text-gray text-sm hover:text-aaa'>
              {el}
            </a>
          </li>
        )}
      </ul>
      <div>
        <h3>Подписаться на рассылку</h3>
        <input type="text" />
        <p>Соглашаясь на рассылку, вы подтверждаете своё согласие с нашим пользовательским соглашением</p>
      </div>
      <Tabs element={['tab A', 'tab 2', 'tab 3']} />
    </footer>
  );
}
