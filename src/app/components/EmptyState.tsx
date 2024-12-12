import Image from 'next/image';

export default function EmptyState() {
    return (
      <div className="flex flex-col justify-center items-center p-[64px_24px] gap-4 w-[736px] h-[266px] border-t border-[#333333] rounded-md">
        <Image src="/assets/Clipboard.png" alt="Clipboard" width="56" height="56" />
        <div className="w-[688px] h-[66px] text-center text-[16px] font-bold leading-[140%] text-[#808080]">
          You don&apos;t have any tasks registered yet.
          <br />
          Create tasks and organize your to-do items.
        </div>
      </div>
    );
  }
  