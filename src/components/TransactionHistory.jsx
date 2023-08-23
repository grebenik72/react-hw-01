import PropTypes from 'prop-types';
import { Table, Tb, Td, Th, Thead, Tr, Type } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Type</Th>
          <Th>Amount</Th>
          <Th>Currency</Th>
        </Tr>
      </Thead>

      <Tb>
        {items.map((item) => {
          return (
            <TableRow
              key={item.id}
              id={item.id}
              type={item.type}
              currency={item.currency}
              amount={item.amount}
            />
          );
        })}
      </Tb>
    </Table>
  );
};

const TableRow = ({ type, amount, currency}) => {
  return (
    <Tr>
      <Type>{type}</Type>
      <Td>{amount}</Td>
      <Td>{currency}</Td>
    </Tr>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

TableRow.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};