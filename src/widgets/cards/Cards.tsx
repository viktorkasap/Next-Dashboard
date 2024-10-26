import { BanknotesIcon, ClockIcon, UserGroupIcon, InboxIcon } from '@heroicons/react/24/outline';

import { lusitana } from '@/shared/assets';

const iconMap = {
  collected: BanknotesIcon,
  customers: UserGroupIcon,
  pending: ClockIcon,
  invoices: InboxIcon,
};

export const CardWrapper = async () => {
  return (
    <>
      {/* NOTE: Uncomment this code in Chapter 9 */}

      {/* <Card title="Collected" value={totalPaidInvoices} type="collected" />
      <Card title="Pending" value={totalPendingInvoices} type="pending" />
      <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
      <Card
        title="Total Customers"
        value={numberOfCustomers}
        type="customers"
      /> */}
    </>
  );
};

interface CardProps {
  title: string;
  value: number | string;
  type: 'invoices' | 'customers' | 'pending' | 'collected';
}

export const Card = ({ title, value, type }: CardProps) => {
  const Icon = iconMap[type];

  return (
    <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
      <div className="flex p-4">
        {Icon ? <Icon className="h-5 w-5 text-gray-700" /> : null}
        <h3 className="ml-2 text-sm font-medium">{title}</h3>
      </div>
      <p
        className={`${lusitana.className}
          truncate rounded-xl bg-white px-4 py-8 text-center text-2xl`}>
        {value}
      </p>
    </div>
  );
};