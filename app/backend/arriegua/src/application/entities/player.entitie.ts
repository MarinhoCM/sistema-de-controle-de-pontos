import { ReplacePropsUtil } from "src/utils/replace-props.util";

export interface PlayerProps {
    name: string;
    created: Date;
    modified: Date;
}


export class PlayerEntity {
    private props: PlayerProps;
    private _id: string;

    constructor(
        props: ReplacePropsUtil<
            PlayerProps,
            { created?: Date, modified?: Date }
        >,
        id?: string
    ) {
        if (id) {
            this._id = id
        }

        this.props = {
            ...props,
            created: props.created || new Date,
            modified: props.modified || new Date,
        }
    }

    public set id(id: string) {
        this._id = id;
    }

    public get id(): string {
        return this._id;
    }

    public set name(name: string) {
        this.props.name = name;
    }

    public get name(): string {
        return this.props.name;
    }

    public set created(created: Date) {
        this.props.created = created;
    }
    public get created(): Date {
        return this.props.created;
    }

    public set modified(modified: Date) {
        this.props.modified = modified;
    }
    public get modified(): Date {
        return this.props.modified;
    }

}