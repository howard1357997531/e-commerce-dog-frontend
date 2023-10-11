import { useCallback, useState } from "react";

export default function useDialogModal(Component) {
  const [open, setOpen] = useState(false);

  const openDialog = useCallback(() => {
    setOpen(true);
  }, []);

  const DialogComponent = useCallback(
    ({ ...props }) => {
      if (!open) return null;
      console.log('props:', props)
      console.log('{ ...props }:', { ...props })
      if (Component) {
        return (
          // {...props} 應該使指 SingleProduct.js 56行 product={product}
          // <ProductDetailDialog product={product} />
          <div>
            <Component open={open} onClose={() => setOpen(false)} {...props} />
          </div>
        );
      }
    },
    [open, Component]
  );

  return [DialogComponent, openDialog];
}
