import { useRouteError } from "react-router-dom";
import styles from './styles.module.scss';
import { Typography } from "@mui/material";
import { CustomButton } from "../../components/Button/Button";

export default function ErrorPage() {
  const error: any = useRouteError();
  console.error(error);

  return (
    <div className={styles.container}>
      <Typography variant="h3">
        Error 404
      </Typography>
      <i>{error.statusText || error.message}</i>
      <CustomButton title="Volver al home" linkTo="/" />
    </div>
  );
}