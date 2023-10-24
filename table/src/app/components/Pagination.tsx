'use client';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

type Props = {
  count: number;
};

const Pagination: React.FC<Props> = ({ count }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const offset = searchParams.get('offset') || 0;
  const limit = searchParams.get('limit') || '10';

  const pages = Array.from(
    { length: Math.ceil(count / +limit) },
    (_, i) => i + 1
  );
  const currentPage = Math.ceil(+offset / +limit) + 1;

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  return (
    <nav
      className="pagination is-centered pr-3 pl-3"
      role="navigation"
      aria-label="pagination"
    >
      <ul className="pagination-list">
        <li>
          <Link
            className="pagination-link"
            href={pathname + '?' + createQueryString('offset', '0')}
          >
            First Page
          </Link>
        </li>
        {currentPage >= 3 ? (
          <li>
            <span className="pagination-ellipsis">&hellip;</span>
          </li>
        ) : (
          <li>
            <span className="pagination-ellipsis pl-4"></span>
          </li>
        )}
        <li>
          {currentPage === 1 ? null : (
            <Link
              className="pagination-link"
              href={
                pathname +
                '?' +
                createQueryString('offset', `${(currentPage - 2) * +limit}`)
              }
            >
              {pages[currentPage - 2]}
            </Link>
          )}
        </li>
        <li>
          <Link
            className="pagination-link is-current"
            href={
              pathname +
              '?' +
              createQueryString('offset', `${(currentPage - 1) * +limit}`)
            }
            aria-current="page"
          >
            {pages[currentPage - 1]}
          </Link>
        </li>
        {currentPage >= pages[pages.length - 1] ? null : (
          <li>
            <Link
              className="pagination-link"
              href={
                pathname +
                '?' +
                createQueryString('offset', `${currentPage * +limit}`)
              }
            >
              {pages[currentPage]}
            </Link>
          </li>
        )}
        {currentPage >= pages[pages.length - 2] ? (
          <li>
            <span className="pagination-ellipsis pl-4"></span>
          </li>
        ) : (
          <li>
            <span className="pagination-ellipsis">&hellip;</span>
          </li>
        )}
        <li>
          <Link
            className="pagination-link"
            href={
              pathname +
              '?' +
              createQueryString('offset', `${pages[pages.length - 2] * +limit}`)
            }
          >
            Last Page
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
