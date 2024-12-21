'use client';

import { ReactNode, ComponentType, useState } from 'react';

import clsx from 'clsx';

import { InvoicesTable } from '@/entites/invoice';
import { formatCurrency, formatDateToLocal } from '@/shared/lib';

import { DeleteInvoiceProps } from '../../types';

interface MobileTableRowProps {
  invoice: InvoicesTable;
  renderStatusInvoice: ReactNode;
  renderCustomerAvatar: ReactNode;
  renderUpdateInvoice: ReactNode;
  DeleteInvoice: ComponentType<DeleteInvoiceProps>;
}

export const MobileTableRow = ({
  invoice,
  renderStatusInvoice,
  renderCustomerAvatar,
  renderUpdateInvoice,
  DeleteInvoice,
}: MobileTableRowProps) => {
  const [isDeleting, setIsDeleting] = useState(false);

  return (
    <div className={clsx('mb-2 w-full rounded-md bg-white p-4', { 'opacity-50': isDeleting })}>
      <div className="flex items-center justify-between border-b pb-4">
        <div>
          <div className="mb-2 flex items-center">
            {renderCustomerAvatar}
            <p>{invoice.name}</p>
          </div>
          <p className="text-sm text-gray-500">{invoice.email}</p>
        </div>
        {renderStatusInvoice}
      </div>
      <div className="flex w-full items-center justify-between pt-4">
        <div>
          <p className="text-xl font-medium">{formatCurrency(invoice.amount)}</p>
          <p>{formatDateToLocal(invoice.date)}</p>
        </div>
        <div className="flex justify-end gap-2">
          {renderUpdateInvoice}
          <DeleteInvoice id={invoice.id} onDeletePending={setIsDeleting} />
        </div>
      </div>
    </div>
  );
};