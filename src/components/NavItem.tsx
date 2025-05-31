interface Props {
    label?: string;
    link?: string;
}

function NavItem({label = "Placeholder text", link}: Props) {
    return <p className="nav-item">
        {!link || link.length === 0 ? label : <a href={link}>{label}</a>}
    </p>;
}

export default NavItem;