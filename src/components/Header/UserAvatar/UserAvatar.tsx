import * as SC from "./styled"

interface UserAvatarProps {
    onClick: () => void
}

const UserAvatar: React.FC<UserAvatarProps> = ({ onClick }) => {
    return (
        <>
            <SC.UserAvatar onClick={onClick}></SC.UserAvatar>
        </>
    )
}

export default UserAvatar
