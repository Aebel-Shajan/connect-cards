import { Html } from '@react-three/drei';
import UserCardFront from '../../../components/UserCard/UserCardFront/UserCardFront';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import UserCardBack from '../../../components/UserCard/UserCardBack/UserCardBack';

function RotatingCard({ user }) {
	const groupRef = useRef();

	// This hook will be called on every frame, rotating the group.
	useFrame(() => {
		if (groupRef.current) {
			groupRef.current.rotation.y += 0.001; // Adjust the rotation speed as needed
		}
	});
	return (
		<group ref={groupRef}
		>
			<Html transform>
				<div
					style={{
						pointerEvents: "none",
						userSelect: "none"
					}}
				>
					<UserCardFront user={user} />
				</div>
			</Html>
			<Html transform position={[0, 0, -0.1]}>
				<div
					style={{
						pointerEvents: "none",
						userSelect: "none"
					}}
				>
					<UserCardBack user={user} />
				</div>
			</Html>

		</group>
	);
}

export default RotatingCard;
