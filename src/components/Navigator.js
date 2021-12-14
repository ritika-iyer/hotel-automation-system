import * as React from "react";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import DnsRoundedIcon from "@mui/icons-material/DnsRounded";
import PermMediaOutlinedIcon from "@mui/icons-material/PhotoSizeSelectActual";
import PublicIcon from "@mui/icons-material/Public";
import SettingsEthernetIcon from "@mui/icons-material/SettingsEthernet";
import SettingsInputComponentIcon from "@mui/icons-material/SettingsInputComponent";
import TimerIcon from "@mui/icons-material/Timer";
import SettingsIcon from "@mui/icons-material/Settings";
import PhonelinkSetupIcon from "@mui/icons-material/PhonelinkSetup";
import HotelRoundedIcon from "@mui/icons-material/HotelRounded";
import RoomServiceRoundedIcon from "@mui/icons-material/RoomServiceRounded";
import PriceChangeIcon from "@mui/icons-material/PriceChange";
import ReceiptIcon from "@mui/icons-material/Receipt";
import InfoIcon from "@mui/icons-material/Info";
import { Link } from "react-router-dom";
import { Anchor } from "@mui/icons-material";

const categories = [
  {
    id: "Services",
    children: [
      {
        id: "Bookings",
        icon: <HotelRoundedIcon />,
        path: "/",
      },
      {
        id: "Catering Service",
        icon: <RoomServiceRoundedIcon />,
        path: "/catering",
      },
      {
        id: "Update Room Price ",
        icon: <PriceChangeIcon />,
        path: "/room/priceupdate",
      },
      {
        id: "Billing",
        icon: <ReceiptIcon />,
        path: "/generatebills",
      },
      { id: "General Information", icon: <InfoIcon />, path: "/geninfo" },
    ],
  },
];

const item = {
  py: "10px",
  px: 3,
  color: "#fff",
  fontWeight: "bolder",
  "&:hover, &:focus": {
    bgcolor: "lightgreen",
  },
};

const itemCategory = {
  boxShadow: "0 -1px 0 rgb(255,255,255,0.1) inset",
  py: 1.5,
  px: 3,
};

export default function Navigator(props) {
  //const { ...other } = props;

  const { ...other } = props;

  const [state, setState] = React.useState({});

  React.useEffect(() => {
    fetch("http://127.0.0.1:8000/api/hotel/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setState({ room_detail: data });
      });
  }, []);

  return (
    <Drawer variant="permanent" {...other}>
      <List disablePadding sx={{ bgcolor: "#fff" }}>
        <ListItem
          sx={{
            ...item,
            ...itemCategory,
            fontSize: 29,
            color: "#00997a",
            paddingTop: "13%",
            paddingBottom: "14%",
            fontStyle: "bold",
          }}
        >
          Admin Controls
        </ListItem>

        {categories.map(({ id, children }) => (
          <Box key={id} sx={{ bgcolor: "#00997a" }}>
            <ListItem sx={{ py: 0, px: 3 }}>
              {/*<ListItemText sx={{ color: "#fff", fontWeight: "bold" }}>
                {id}
        </ListItemText>*/}
            </ListItem>
            {children.map(({ id: childId, icon, active, path }) => (
              <Link to={path}>
                <ListItem disablePadding key={childId}>
                  <ListItemButton selected={active} sx={item}>
                    <ListItemIcon>{icon}</ListItemIcon>
                    <ListItemText>{childId}</ListItemText>
                    <Divider sx={{ mt: 11 }} />
                  </ListItemButton>
                </ListItem>
              </Link>
            ))}
            <Divider sx={{ mt: 2.5 }} />
          </Box>
        ))}

        {/* <Box key={"id"} sx={{ bgcolor: "#00997a" }}>
          <ListItem sx={{ py: 2, px: 3 }}>
            <ListItemText sx={{ color: "#fff" }}>Room Occupancy</ListItemText>
          </ListItem>
          {state.room_detail &&
            state.room_detail.map((room) => (
              <ListItem
                disablePadding
                key={room.room_type}
                sx={{ bgcolor: "#00997a" }}
              >
                <ListItemButton sx={item}>
                  <ListItemText>{room.room_type}</ListItemText>
                  <ListItemText>
                    {((5 - room.room_availability) / 5) * 100} %
                  </ListItemText>
                </ListItemButton>
              </ListItem>
            ))}
            </Box> */}
      </List>
    </Drawer>
  );
}
