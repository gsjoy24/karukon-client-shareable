'use client';
import { useManipulateQuantityMutation } from '@/redux/api/userApi';
import { IconButton, Stack, Typography } from '@mui/material';
import { CiCircleMinus, CiCirclePlus } from 'react-icons/ci';
import { toast } from 'sonner';

type CartQuantityHandlerProps = {
	id: string;
	quantity: number;
	stock: number;
};

const CartQuantityHandler = ({ id, quantity, stock }: CartQuantityHandlerProps) => {
	const [manipulateQuantity, { isLoading }] = useManipulateQuantityMutation();

	const handleQuantityChange = async (quantity: number) => {
		try {
			const res = await manipulateQuantity({ productId: id, quantity }).unwrap();
			if (!res.success) {
				toast.error(res?.message ?? 'Failed to update quantity!');
			}
		} catch (error) {
			toast.error('Failed to update quantity!');
		}
	};
	return (
		<Stack
			sx={{
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'center',
				alignItems: 'center',
				gap: 1,
				color: 'primary.main'
			}}
		>
			<IconButton onClick={() => handleQuantityChange(quantity - 1)} disabled={quantity === 1 || isLoading}>
				<CiCircleMinus />
			</IconButton>
			<Typography>{quantity}</Typography>
			<IconButton
				onClick={() => handleQuantityChange(quantity + 1)}
				disabled={quantity === 10 || isLoading || stock === quantity}
			>
				<CiCirclePlus />
			</IconButton>
		</Stack>
	);
};

export default CartQuantityHandler;
