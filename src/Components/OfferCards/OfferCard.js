import React from "react";
import "./OfferCard.styles.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { useContext } from 'react';
import {MyContext } from '../ContextProvider';

function OfferCard(props) {
  const { state, dispatch } = useContext(MyContext);
  return (
    <Card
      sx={{
        maxWidth: { xs: 400, sm: 350 },
        margin: { xs: 0, md: 2 },
        cursor: "arrow",
      }}
      className="offerCard"
    >
      {props.data.headerImg !== "" && (
        <CardMedia
          component="img"
          height="200"
          width="200"
          image={props.data.headerImg}
        />
      )}
      <CardContent>
        {props.data.headerImg === "" && (
          <Typography
            sx={{ fontSize: 14 }}
            color="text.primary"
            fontWeight="bold"
            gutterBottom
          >
            {props.data.headerText}
          </Typography>
        )}
        <Typography variant="h5" component="div"></Typography>
        <Typography dangerouslySetInnerHTML={{ __html: props.data.price }} />
        <Typography sx={{ mb: 1.5 }} variant="body2" color="text.secondary">
          {props.data.offerText}
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          {props.data.mainFeature}
        </Typography>
        {props.data.attributes.map((attribute) => (
          <Typography
            variant="body1"
            key={attribute}
            dangerouslySetInnerHTML={{ __html: attribute }}
          />
        ))}
      </CardContent>
      <CardActions sx={{ justifyContent: "center" }}>
        <Button
          className="card-select-button"
          onClick={() => {
            dispatch({ type: "ADD_TO_CART", payload: { id: props.data.id, name: props.data.mainFeature, quantity: 1, price: 120 } });
          }}
        >
          Select
        </Button>
      </CardActions>
    </Card>
  );
}

export default OfferCard;
