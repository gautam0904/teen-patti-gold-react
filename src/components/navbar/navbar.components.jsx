import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';                         
import Divider from '@mui/material/Divider';
import UploadIcon from '@mui/icons-material/Upload';
import PercentIcon from '@mui/icons-material/Percent';
import HomeIcon from '@mui/icons-material/Home';
import { useSidebar } from '../../contexts/sidebar.context';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import CssBaseline from '@mui/material/CssBaseline';
import { useNavigate } from 'react-router-dom';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import EmojiSymbolsIcon from '@mui/icons-material/EmojiSymbols';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MenuIcon from '@mui/icons-material/Menu';


const drawerWidth = 240;

const Navbar = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { isOpen, setIsOpen } = useSidebar();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
    setIsOpen(!isOpen);
  };

  const container = window !== undefined ? () => window().document.body : undefined;

  const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

  const menuItems = [
    { key: 'facebook', text: 'Home', icon: HomeIcon, path: '/dashboard'},
    { key: 'x', text: 'Stocks', icon: AutoStoriesIcon, path: '/stocks' },
    { key: 'instagram', text: 'Add Sale', icon: PointOfSaleIcon, path: '/sales/new' },
    { key: 'whatsapp', text: 'Add Purchase', icon: WhatsAppIcon, path: '/purchasesGST/new' },
    { key: 'teligram', text: 'Add New Customer', icon: TelegramIcon, path: '/customersGST/new' },
    { key: 'mode', text: 'Challan', icon: DarkModeIcon, path: '/challan' }
  ];

  const navigate = useNavigate();

  const handleMenuClick = (key, path) => {
    navigate(path);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', }}>
      <List>
        {menuItems.map((item, index) => (
          <ListItem key={item.key} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <Button
                sx={{
                  bgcolor: '#7b4eff',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  px: 2,
                  borderRadius: '4px',
                  width: '100%'
                }}
                onClick={() => handleMenuClick(item.key, item.path)}
              >
                <item.icon sx={{ mr: 1 }} />
                {item.text}
              </Button>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <Box sx={{ display: 'flex', bgcolor: 'white' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ bgcolor: 'white' }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>

            <Toolbar>
              <IconButton
                sx={{ bgcolor: '#7b4eff', borderRadius: '50%', width: '40px', height: '40px', flexGrow: 1, display: { xs: 'flex', sm: 'flex', alignItems: 'center' } }}
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
            </Toolbar>

            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center', gap: 1 }}>
              {menuItems.map((item, index) => (
                <React.Fragment key={item.key}>
                  <Button
                    sx={{ bgcolor: '#7b4eff', color: 'white', display: 'flex', alignItems: 'center', px: 2 }}
                    onClick={() => handleMenuClick(item.key, item.path)}
                  >
                    <item.icon sx={{ mr: 1 }} />
                    {item.text}
                  </Button>
                  {index < menuItems.length - 1 && (
                    <Divider orientation="vertical" flexItem sx={{ bgcolor: 'rgba(255,255,255,0.3)' }} />
                  )}
                </React.Fragment>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: false, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
};

export default React.memo(Navbar);