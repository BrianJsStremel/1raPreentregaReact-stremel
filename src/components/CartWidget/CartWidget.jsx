import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

const CartWidget = () => {
  return (
    <div style={{ display: "flex" }}>
      <ShoppingCartCheckoutIcon />
      <span>0 COMPRA</span>
    </div>
  );
};

export default CartWidget;
