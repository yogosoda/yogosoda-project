import { CheckItemProps } from '@dev/shared/types/direct.type';

export default function DirectCheckItem({ children }: CheckItemProps) {
    return (
        <li className="text-[#333333] text-justify text-[13px] flex gap-2">
            <span>-</span>
            <span>{children}</span>
        </li>
    );
}
