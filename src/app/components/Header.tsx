import Image from 'next/image';

type HeaderProps = {
  onCreate?: () => void;
  showCreateButton?: boolean;
};

export default function Header({ onCreate, showCreateButton = true }: HeaderProps) {
  return (
    <div className="relative w-[1545px] h-[1024px] bg-[#1A1A1A]">
      {/* Background top banner */}
      <div className="absolute top-0 left-0 right-0 h-[200px] bg-[#0D0D0D]" />

      {/* Logo and Title */}
      <div className="absolute left-[540px] top-[72px] w-[226px] h-[48px]" />
      <h1
        className="absolute font-black text-[40px] leading-[48px] text-[#4EA8DE]"
        style={{
          left: "660px",
          top: "72px",
          width: "192px",
          height: "48px"
        }}
      >
       Todo{' '}
        <span style={{ color: "#5E60CE" }}>
          App
        </span>
      </h1>
      <div
        className="absolute"
        style={{
          width: "22px",
          height: "36px",
          left: "620px",
          top: "82px"
        }}
      >
        <Image src="/assets/rocket.png" alt="Rocket" width={22} height={36} />
      </div>

      {/* Conditionally show the create task button only if showCreateButton is true */}
      {showCreateButton && onCreate && (
        <div
          className="absolute flex flex-row items-center gap-2"
          style={{
            width: "736px",
            height: "52px",
            left: "calc(50% - 836px/2)",
            top: "173px"
          }}
        >
          <button
            onClick={onCreate}
            className="flex flex-row justify-center items-center p-4 gap-2 w-[736px] h-[52px] bg-[#1E6F9F] rounded-lg font-bold text-[14px] leading-[20px] text-[#F2F2F2]"
          >
            Create Task
            <Image src="/assets/plus-icon.png" alt="Plus" width={16} height={16} />
          </button>
        </div>
      )}
    </div>
  );
}
