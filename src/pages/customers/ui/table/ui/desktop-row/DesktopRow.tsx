import { ReactNode } from 'react';

import { CustomerTable } from '@/entites/customer';

import { CustomerAvatarServer } from '@/features/customer-avatar';

import { formatCurrency } from '@/shared/lib';

interface RowProps {
  customer: CustomerTable;
  renderDeleteButton: ReactNode;
  renderEditCustomer: ReactNode;
}

export const DesktopTableRow = ({ customer, renderEditCustomer, renderDeleteButton }: RowProps) => {
  return (
    <tr
      key={customer.id}
      className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
      <td className="whitespace-nowrap bg-white py-5 pl-4 pr-3 text-sm text-black group-first-of-type:rounded-md group-last-of-type:rounded-md sm:pl-6">
        <div className="flex items-center gap-3">
          <Avatar name={customer.name} avatarUrl={customer.avatarUrl} avatarFile={customer.avatarFile} />
          <p>{customer.name}</p>
        </div>
      </td>
      <td className="bg-white whitespace-nowrap px-1 py-3">{customer.email}</td>
      <td className="bg-white whitespace-nowrap px-1 py-3"> {customer.totalInvoices}</td>
      <td className="bg-white whitespace-nowrap px-1 py-3">{formatCurrency(customer.totalPending)}</td>
      <td className="bg-white whitespace-nowrap px-1 py-3">{formatCurrency(customer.totalPaid)}</td>
      <td className="bg-white whitespace-nowrap px-3 py-3">
        <div className="flex justify-end gap-3">
          {renderEditCustomer}
          {renderDeleteButton}
        </div>
      </td>
    </tr>
  );
};

const Avatar = ({ name, avatarUrl, avatarFile }: { name: string; avatarUrl: string | null; avatarFile: Uint8Array | null }) => {
  let src = avatarUrl || '';

  if (avatarFile) {
    const base64String = Buffer.from(avatarFile).toString('base64');
    src = `data:image/png;base64,${base64String}`;
  }

  return (
    <>
      {/* 1) Server component */}
      <CustomerAvatarServer name={name} src={src} />
      {/* 2) Client component */}
      {/* <CustomerAvatarClient name={customer.name} src={avatarUrl || ''} /> */}
    </>
  );
};
