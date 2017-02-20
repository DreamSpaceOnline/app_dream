export interface ArticleEvents {
    subscribed: {
        onEditModeChanged: string;
    }
}

const events: ArticleEvents = {
    subscribed: {
        onEditModeChanged: 'article-edit-mode-changed'
    }
};

export default events;