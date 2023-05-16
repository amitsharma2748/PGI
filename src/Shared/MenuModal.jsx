import { ExpandLess, ExpandMore } from "@mui/icons-material";
import {
  Divider,
  Grid,
  List,
  Collapse,
  ListItemButton,
  ListItemText,
  Paper,
} from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import "../styles/component/Header.scss";
const MenuModal = () => {
  const [currentOpenId, setCurrentOpenId] = useState(null);

  const handleOpen = (id) => {
    id === currentOpenId ? setCurrentOpenId(null) : setCurrentOpenId(id);
  };
  return (
    <Container
      className="modal"
      maxWidth={"md"}
      sx={{ margin: "auto" }}
      disablePadding
    >
      <List className="main-menu-list" component="div">
        <ListItemButton className="list-btn">
          <ListItemText className="text-item" primary="HOME" />
        </ListItemButton>
        <ListItemButton className="list-btn">
          <ListItemText className="text-item" primary="ABOUT PGI-D" />
        </ListItemButton>
        <ListItemButton
          className="list-btn"
          id="status-indux-head"
          onClick={() => handleOpen("status-indux-head")}
        >
          <ListItemText className="text-item" primary="STATES INDEX" />
          {currentOpenId === "status-indux-head" ? (
            <ExpandLess />
          ) : (
            <ExpandMore />
          )}
        </ListItemButton>
        <Collapse
          in={currentOpenId === "status-indux-head"}
          timeout="auto"
          unmountOnExit
        >
          <List className="status-indux-head" component={Paper} disablePadding>
            <Grid className="States-grid" container>
              <Grid item xs={12} sm={6} md={3}>
                <ul className="states-list">
                  <li>Andaman and Nicobar Islands</li>
                  <li>Bihar</li>
                  <li>Daman & Diu</li>
                  <li>Haryana</li>
                  <li>Andhra Pradesh</li>
                  <li>Assam</li>
                  <li>Arunachal Pradesh</li>
                  <li>Chhattisgarh</li>
                  <li>Goa</li>
                  <li>Gujarat</li>
                </ul>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <ul className="states-list">
                  <li>Andaman and Nicobar Islands</li>
                  <li>Bihar</li>
                  <li>Daman & Diu</li>
                  <li>Haryana</li>
                  <li>Andhra Pradesh</li>
                  <li>Assam</li>
                  <li>Arunachal Pradesh</li>
                  <li>Chhattisgarh</li>
                  <li>Goa</li>
                  <li>Gujarat</li>
                </ul>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <ul className="states-list">
                  <li>Andaman and Nicobar Islands</li>
                  <li>Bihar</li>
                  <li>Daman & Diu</li>
                  <li>Haryana</li>
                  <li>Andhra Pradesh</li>
                  <li>Assam</li>
                  <li>Arunachal Pradesh</li>
                  <li>Chhattisgarh</li>
                  <li>Goa</li>
                  <li>Gujarat</li>
                </ul>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <ul className="states-list">
                  <li>Andaman and Nicobar Islands</li>
                  <li>Bihar</li>
                  <li>Daman & Diu</li>
                  <li>Haryana</li>
                  <li>Andhra Pradesh</li>
                  <li>Assam</li>
                  <li>Arunachal Pradesh</li>
                  <li>Chhattisgarh</li>
                  <li>Goa</li>
                  <li>Gujarat</li>
                </ul>
              </Grid>
            </Grid>
          </List>
        </Collapse>
        <ListItemButton
          className="list-btn"
          id="reports-head"
          sx={{ height: "100%" }}
          onClick={() => handleOpen("reports-head")}
          disablePadding
        >
          <ListItemText className="text-item" primary="REPORTS" />
          {currentOpenId === "reports-head" ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse
          in={currentOpenId === "reports-head"}
          timeout="auto"
          unmountOnExit
        >
          <List className="status-indux-head" component={Paper} disablePadding>
            <ListItemButton className="text-btn">
              <ListItemText
                className="text-item"
                primary="PGI-D-2018-19 & 2019-20 ENGLISH"
              />
            </ListItemButton>
            <Divider />
            <ListItemButton className="text-btn">
              <ListItemText
                className="text-item"
                primary="PGI-D-2018-19 & 2019-20 HINDI"
              />
            </ListItemButton>
          </List>
        </Collapse>
        <ListItemButton
          className="list-btn"
          id="categories-head"
          onClick={() => handleOpen("categories-head")}
        >
          <ListItemText className="text-item" primary="CATEGORIES" />
          {currentOpenId === "categories-head" ? (
            <ExpandLess />
          ) : (
            <ExpandMore />
          )}
        </ListItemButton>

        <Collapse
          in={currentOpenId === "categories-head"}
          timeout="auto"
          unmountOnExit
        >
          <List className="status-indux-head" component={Paper} disablePadding>
            <ListItemButton className="text-btn">
              <ListItemText className="text-item" primary="Outcomes" />
            </ListItemButton>
            <Divider />
            <ListItemButton className="text-btn" sx={{ pl: 4 }}>
              <ListItemText
                className="text-item"
                primary="Effective Classroom transacion (ECT)"
              />
            </ListItemButton>
            <Divider />
            <ListItemButton className="text-btn" sx={{ pl: 4 }}>
              <ListItemText
                className="text-item"
                primary="Infrastructure, facilities, Student Entitlements (IF & SE)"
              />
            </ListItemButton>
            <Divider />
            <ListItemButton className="text-btn" sx={{ pl: 4 }}>
              <ListItemText
                className="text-item"
                primary="School Safely and Child Protection (SS & CP)"
              />
            </ListItemButton>
            <Divider />
            <ListItemButton className="text-btn" sx={{ pl: 4 }}>
              <ListItemText
                className="text-item"
                primary="Digital Learning (DL)"
              />
            </ListItemButton>
            <Divider />
            <ListItemButton className="text-btn" sx={{ pl: 4 }}>
              <ListItemText
                className="text-item"
                primary="Governance Processes(GP)"
              />
            </ListItemButton>
          </List>
        </Collapse>
      </List>
    </Container>
  );
};

export default MenuModal;
