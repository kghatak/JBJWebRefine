import React from "react";
import { useRouterContext, TitleProps } from "@pankod/refine-core";
import { Button } from "@pankod/refine-mui";


export const Title: React.FC<TitleProps> = ({ collapsed }) => {
  const { Link } = useRouterContext();

  return (
    <Button fullWidth variant="text" disableRipple>
      <Link href="/">
        {collapsed ? (
          <img src="/plogo.png" alt="ReVignan Mancha" width="28px" />
        ) : (
          <img src="/plogofull.png" alt="Vignan Mancha" width="160px" />
        )}
      </Link>
    </Button>
  );
};
