import Link from 'next/link';

export default function DefaultRoutes({ onClick }: { onClick?: () => any }) {
  return (
    <>
      <span className="relative">
        <Link onClick={onClick} href="#info">
          Thông tin
        </Link>
      </span>
      <span className="relative">
        <Link onClick={onClick} href="#agenda">
          Lịch trình
        </Link>
      </span>
      <span className="relative">
        <Link onClick={onClick} href="#speakers">
          Diễn giả
        </Link>
      </span>
      <span className="relative">
        <Link onClick={onClick} href="#joinus">
          Tham gia
        </Link>
      </span>
      <span className="relative">
        <Link onClick={onClick} href="#contacts">
          Liên hệ
        </Link>
      </span>
    </>
  );
}