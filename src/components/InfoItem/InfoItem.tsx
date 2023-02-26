import styles from './InfoItem.module.scss';

export interface InfoItemProps {
  icon: React.ReactNode;
  text?: string | null;
  isLink?: boolean;
}

export const InfoItem = ({ icon, text, isLink }: InfoItemProps) => {
  const currentText = text || 'Not Available';

  let currentHref = '';

  if (isLink) {
    currentHref = text && text.startsWith('http') ? text : `https://${text}`;
  }

  return (
    <div className={`${styles.infoItem}${text ? '' : ` ${styles.empty}`}`}>
      {icon}
      <div>
        {isLink && text ? (
          <a
            className={styles.link}
            href={currentHref}
            target="_blank"
            rel="noreferrer"
          >
            {currentText}
          </a>
        ) : (
          currentText
        )}
      </div>
    </div>
  );
};
