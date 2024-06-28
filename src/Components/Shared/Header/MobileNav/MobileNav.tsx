'use client';
import logo from '@/assets/Karukon-logo.png';
import { Chip, IconButton, Stack } from '@mui/material';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';
import { CgMenuRightAlt } from 'react-icons/cg';
import { CiLocationOn } from 'react-icons/ci';
import { FaRegUser } from 'react-icons/fa';
import { GiFlexibleLamp } from 'react-icons/gi';
import { IoCartOutline, IoClose } from 'react-icons/io5';
import { LuPhoneCall } from 'react-icons/lu';
import { MdOutlineArrowOutward } from 'react-icons/md';
import SocialSection from '../../SocialSection';
import SearchProduct from '../SearchProduct';

const MobileNav = () => {
	const [open, setOpen] = React.useState(false);
	const cart = 2;
	const mobileNavLinks = [
		{ name: 'Home', href: '/' },
		{ name: 'Products', href: '/products' },
		{ name: 'Wishlist', href: '/wishlist' },
		{ name: 'Cart', href: '/cart' },
		{
			name: 'About Us',
			href: '/about-us'
		},
		{
			name: 'Term of Service',
			href: '/term-of-service'
		},
		{
			name: 'Privacy Policy',
			href: '/privacy-policy'
		},
		{
			name: 'Contact Us',
			href: '/contact-us'
		}
	];

	const currentYear = new Date().getFullYear();

	const toggleDrawer = (newOpen: boolean) => () => {
		setOpen(newOpen);
	};

	const DrawerList = (
		<Box sx={{ width: 350 }} role='presentation' px={2}>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
					p: 2,
					borderBottom: '1px solid #455a6477',
					mb: 3,
					position: 'sticky',
					top: 0,
					bgcolor: 'background.paper',
					zIndex: 1
				}}
			>
				<Image src={logo} alt='logo' width={80} height={80} />
				<IconButton
					size='small'
					onClick={toggleDrawer(false)}
					aria-label='close drawer'
					sx={{
						bgcolor: '#99ffab',
						color: 'secondary.main'
					}}
				>
					<IoClose size={22} />
				</IconButton>
			</Box>

			{/* search bar */}
			<SearchProduct />

			{/* links */}
			<Stack direction='column' gap={2} p={2} mt={2}>
				{mobileNavLinks.map((link, index) => (
					<Link key={index} href={link.href}>
						<Stack
							direction='row'
							justifyContent='space-between'
							align-items='center'
							sx={{
								'&:hover': {
									color: 'primary.main'
								},
								transition: 'all 0.3s',
								borderBottom: '1px solid #f0f0f0'
							}}
						>
							<span>{link.name}</span>
							<MdOutlineArrowOutward />
						</Stack>
					</Link>
				))}
			</Stack>

			{/* info */}
			<Stack
				gap={1}
				sx={{
					border: '1px solid #f0f0f0',
					borderRadius: 2,
					p: 2,
					my: 2,
					fontSize: 14
				}}
			>
				<Stack direction='row' gap={2} alignItems='center'>
					<CiLocationOn size={22} />
					<span>232 A, Dim para, Dhaka</span>
				</Stack>
				<Stack direction='row' gap={2} alignItems='center'>
					<LuPhoneCall size={22} />
					<span>+1234567890</span>
				</Stack>
				<Stack direction='row' gap={2} alignItems='center'>
					<GiFlexibleLamp size={22} />
					<span>Monday - Friday: 9:00 AM - 6:00 PM</span>
				</Stack>
			</Stack>
			<SocialSection />

			{/* footer */}
			<Box
				sx={{
					borderTop: '1px solid #f0f0f0',
					p: 2,
					mt: 2,
					fontSize: 14
				}}
			>
				<span>&copy; {currentYear} Karukon. All rights reserved.</span>
			</Box>
		</Box>
	);

	return (
		<>
			<Stack
				direction='row'
				justifyContent='space-between'
				alignItems='center'
				gap={2}
				sx={{ display: { xs: 'flex', md: 'none' } }}
				py={1}
			>
				<IconButton
					onClick={toggleDrawer(true)}
					aria-label='open drawer'
					sx={{
						color: 'primary.main'
					}}
				>
					<CgMenuRightAlt size={32} />
				</IconButton>
				<Link href='/'>
					<Image src={logo} alt='logo' width={60} height={60} />
				</Link>

				{/* buttons */}
				<Stack direction='row' gap={2} alignItems='center'>
					{/* cart button */}
					<Box component={Link} href='/cart' aria-label='User profile' sx={{ position: 'relative' }}>
						<Chip label={cart} color='primary' size='small' className='absolute top-[-10px] left-[18px]' />
						<IoCartOutline size={30} />
					</Box>
					{/* user button */}
					<Box component={Link} href='/profile' aria-label='User profile'>
						<FaRegUser size={22} />
					</Box>
				</Stack>
			</Stack>
			<Drawer open={open} onClose={toggleDrawer(false)}>
				{DrawerList}
			</Drawer>
		</>
	);
};

export default MobileNav;